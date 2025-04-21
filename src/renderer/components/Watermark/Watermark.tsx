import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import './Watermark.css';
import { degrees } from 'pdf-lib';

const Watermark: React.FC = () => {
    const [watermarkText, setWatermarkText] = useState<string>('');
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleWatermarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWatermarkText(event.target.value);
    };

    const handleUpload = (event: any) => {
        const files = event.files.map((file: File) => file);
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const handleProcessDocuments = async () => {
        if (uploadedFiles.length === 0 || !watermarkText) {
            alert('Please upload PDF files and enter a watermark text.');
            return;
        }

        const { PDFDocument, rgb } = await import('pdf-lib');

        for (const file of uploadedFiles) {
            const objectURL = URL.createObjectURL(file);
            const response = await fetch(objectURL);
            const arrayBuffer = await response.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);

            const pages = pdfDoc.getPages();
            pages.forEach((page) => {
                const { width, height } = page.getSize();
                page.drawText(watermarkText, {
                    x: width / 2 - 50,
                    y: height / 2,
                    size: 50,
                    color: rgb(0.75, 0.75, 0.75),
                    opacity: 0.5,
                    rotate: degrees(45),
                });
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `watermarked-${file.name}`;
            a.click();
        }
    };

    return (
        <div className="watermark-container">
            <h2 className="watermark-title">Add Watermark to PDF</h2>
            <div className="watermark-inputs">
                <FileUpload
                    name="pdf"
                    accept="application/pdf"
                    customUpload
                    uploadHandler={handleUpload}
                    multiple
                    chooseLabel="Choose PDF"
                    uploadLabel="Upload"
                    cancelLabel="Cancel"
                    emptyTemplate={<p className="p-m-0">Drag and drop files here to upload.</p>} 
                 />
                <input
                    type="text"
                    placeholder="Enter watermark text"
                    value={watermarkText}
                    onChange={handleWatermarkChange}
                    className="watermark-text-input"
                />
            </div>
            <Button
                label="Process Document"
                icon="pi pi-check"
                className="p-button-orange watermark-button"
                onClick={handleProcessDocuments}
                disabled={uploadedFiles.length === 0 || !watermarkText} // Disable button if no files or watermark text
            />
        </div>
    );
};

export default Watermark;

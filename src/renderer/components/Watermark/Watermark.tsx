import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import './Watermark.css';
import { degrees } from 'pdf-lib';

type FileWithStatus = {
    file: File;
    status: 'pending' | 'completed';
};

const Watermark: React.FC = () => {
    const [watermarkText, setWatermarkText] = useState<string>('');
    const [uploadedFiles, setUploadedFiles] = useState<FileWithStatus[]>([]);

    const handleWatermarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWatermarkText(event.target.value);
    };

    const handleSelect = (event: any) => {
        const files: FileWithStatus[] = event.files.map((file: File) => ({
            file,
            status: 'pending',
        }));
        setUploadedFiles(files);
    };

    const handleUpload = () => {
        const updated: FileWithStatus[] = uploadedFiles.map((item) => ({
            ...item,
            status: 'completed',
        }));
        setUploadedFiles(updated);

        // Inject badge updates manually after DOM renders
        setTimeout(() => {
            document.querySelectorAll('.p-fileupload-filename').forEach((el) => {
                const name = el.textContent?.trim();
                const match = updated.find((f) => f.file.name === name);
                if (match) {
                    // Remove existing badge if present
                    const existingBadge = el.parentElement?.querySelector('.p-badge');
                    if (existingBadge) existingBadge.remove();

                    // Add new badge
                    const badge = document.createElement('span');
                    badge.className = `p-badge p-component ${match.status === 'pending' ? 'p-badge-warning' : 'p-badge-success'}`;
                    badge.innerText = match.status.charAt(0).toUpperCase() + match.status.slice(1);
                    badge.style.marginLeft = '1rem';

                    el.parentElement?.appendChild(badge);
                }
            });
        }, 100); // Slight delay to ensure DOM is ready
    };

    const handleProcessDocuments = async () => {
        if (uploadedFiles.length === 0 || !watermarkText) {
            alert('Please upload PDF files and enter a watermark text.');
            return;
        }

        const { PDFDocument, rgb } = await import('pdf-lib');

        for (const item of uploadedFiles) {
            const file = item.file;
            const arrayBuffer = await file.arrayBuffer();
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
                    onSelect={handleSelect}
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
                disabled={uploadedFiles.length === 0 || !watermarkText}
            />
        </div>
    );
};

export default Watermark;

"use client";
import styles from "./AttachmentsSection.module.css";
import { Eye, Plus, Trash2 } from "lucide-react";
import { useState, useRef } from "react";

interface FilesType {
  id: string;
  name: string;
  size: string;
}

export default function Attachments() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<FilesType[]>([]);

  // for uploading files
  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  // this function for adding the files in page
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files;

    // ! means if you don't choose file ---> go out from function
    if (!selectedFile) return;

    const rawFilesArray = Array.from(selectedFile);

    const formattedFiles: FilesType[] = rawFilesArray.map((file) => {
      return {
        id: crypto.randomUUID(),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      };
    });

    setFiles([...files, ...formattedFiles]);
  }

  // function deleting files
  function handleDeleteFiles(id: string) {
    setFiles(files.filter((deleteFile) => deleteFile.id !== id));
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Attachments</p>
        <input
          type="file"
          ref={fileInputRef}
          className={styles.fileBtn}
          onChange={handleFileChange}
        />

        {/* button with files */}
        <div className={styles["btn-fileLists"]}>
          <button className={styles.btn} onClick={handleButtonClick}>
            <Plus size={25} strokeWidth={1.5} />
            <span>Upload more items</span>
          </button>

          {/* card container */}
          <div className={styles.fileLists}>
            {files.map((file) => {
              return (
                // each card
                <div key={file.id} className={styles.file}>
                  {/* information files */}
                  <div className={styles.infoFiles}>
                    <p className={styles.fileName}>{file.name}</p>
                    <p className={styles.fileSize}>{file.size}</p>
                  </div>
                  {/* icons */}
                  <div className={styles.containerIcons}>
                    <Eye size={20} className={styles.eye} />
                    <Trash2
                      size={20}
                      className={styles.trash}
                      onClick={() => handleDeleteFiles(file.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

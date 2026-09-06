"use client";
import ConfirmModal from "@/Components/shared/ConfirmModal/ConfirmModal";
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
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [fileToDelete, setFileToDelete] = useState<string | null>(null);

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
          <button className={styles.btnPlus} onClick={handleButtonClick}>
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
                      onClick={() => {
                        setFileToDelete(file.id);
                        setIsOpenDelete(true);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* confirm deleting */}
          {isOpenDelete && (
            <ConfirmModal
              icon={<Trash2 size={48} className={styles.trash} />}
              variant="danger"
              onClose={() => {
                setIsOpenDelete(false);
                setFileToDelete(null);
              }}
            >
              <div className={styles.containerMessageDeleting}>
                <h2 className={styles.message}>Delete File?</h2>
                <p className={styles.confirmMessage}>
                  Are you sure you want to delete this file? This action is
                  irreversible!
                </p>
                <div className={styles.btnContainer}>
                  <button
                    className={`${styles.btn} ${styles.cancel}`}
                    onClick={() => {
                      setIsOpenDelete(false);
                    }}
                  >
                    cancel
                  </button>
                  <button
                    className={`${styles.btn} ${styles.delete}`}
                    onClick={() => {
                      if (fileToDelete) handleDeleteFiles(fileToDelete);
                      setIsOpenDelete(false);
                      setFileToDelete(null);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </ConfirmModal>
          )}
        </div>
      </div>
    </div>
  );
}

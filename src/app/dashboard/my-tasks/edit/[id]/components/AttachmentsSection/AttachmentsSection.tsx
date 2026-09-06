"use client";
import ConfirmModal from "@/Components/shared/ConfirmModal/ConfirmModal";
import styles from "./AttachmentsSection.module.css";
import { CheckCircle2, Eye, Plus, Trash2, Loader2 } from "lucide-react";
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
  const [deleteStep, setDeleteStep] = useState<"confirm" | "success">(
    "confirm",
  );
  const [fileToDelete, setFileToDelete] = useState<string | null>(null);

  // for loading delete
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  // for uploading files
  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  // this function for adding the files in page
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files;

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

  function handleCloseModal() {
    setFileToDelete(null);
    setDeleteStep("confirm");
    setIsLoadingDelete(false);
  }

  function handleConfirmDelete() {
    if (!fileToDelete) return;

    setIsLoadingDelete(true);

    setTimeout(() => {
      handleDeleteFiles(fileToDelete);
      setIsLoadingDelete(false);
      setDeleteStep("success");
    }, 800);
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
            {files.length > 0 &&
              files.map((file) => {
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
          {fileToDelete && (
            <ConfirmModal
              icon={
                deleteStep === "confirm" ? (
                  <Trash2 size={48} className={styles.trash} />
                ) : (
                  <CheckCircle2 size={48} className={styles.correct} />
                )
              }
              variant={deleteStep === "confirm" ? "danger" : "success"}
              onClose={handleCloseModal}
            >
              {deleteStep === "confirm" ? (
                // ! confirm deleting file
                <div className={styles.containerMessageDeleting}>
                  <h2 className={styles.message}>Delete File?</h2>
                  <p className={styles.confirmMessage}>
                    Are you sure you want to delete this file? This action is
                    irreversible!
                  </p>
                  <div className={styles.btnContainer}>
                    <button
                      className={`${styles.btn} ${styles.cancel}`}
                      onClick={handleCloseModal}
                      disabled={isLoadingDelete}
                    >
                      cancel
                    </button>
                    <button
                      className={`${styles.btn} ${styles.delete}`}
                      onClick={handleConfirmDelete}
                      disabled={isLoadingDelete}
                    >
                      {isLoadingDelete ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        "Delete"
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                // ? success deleting file
                <div className={styles.containerMessageDeleting}>
                  <h2 className={styles.message}>Done!</h2>
                  <p className={styles.confirmMessage}>
                    File is deleted successfully.
                  </p>
                  <div className={styles.btnContainer}>
                    <button
                      className={`${styles.btn} ${styles.gotItBtn}`}
                      onClick={handleCloseModal}
                    >
                      Got it
                    </button>
                  </div>
                </div>
              )}
            </ConfirmModal>
          )}
        </div>
      </div>
    </div>
  );
}

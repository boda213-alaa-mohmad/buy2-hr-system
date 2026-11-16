"use client";
import { useState, createContext, useRef, useEffect } from "react";

interface typeImageProvider {
  image: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onHandleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleChange: () => void;
}

export const profileImageProvider = createContext<typeImageProvider>({
  image: "",
  inputRef: { current: null },
  onHandleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => {},
  onHandleChange: () => {},
});

export default function ProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const savedImage = localStorage.getItem("profile-image");
      if (savedImage) {
        setImage(savedImage);
      }
    } catch (error) {
      console.error("Error loading image from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (image === null) return;
    try {
      localStorage.setItem("profile-image", image);
    } catch (error) {
      console.error("Error saving image to localStorage:", error);
    }
  }, [image]);

  return (
    <profileImageProvider.Provider
      value={{
        image: image,
        inputRef: inputRef,
        onHandleFileSelect(e) {
          const fileChosen = e.target.files?.[0];
          if (!fileChosen) return;

          const fileReader = new FileReader();
          fileReader.onload = () => {
            if (typeof fileReader.result === "string")
              setImage(fileReader.result);
          };
          fileReader.readAsDataURL(fileChosen);
        },
        onHandleChange: () => {
          inputRef.current?.code ? null : inputRef.current?.click();
        },
      }}
    >
      {children}
    </profileImageProvider.Provider>
  );
}

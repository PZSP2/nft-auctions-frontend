import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_KEYS } from "../../api/API_KEYS";

const CreateNftPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const canCreate = name && description && file;

  const { mutateAsync } = useMutation(
    [API_KEYS.CREATE_NFT],
    (formData: FormData) => axios.post("/api/nft", formData),
    { onSuccess: () => navigate("/ownedNfts") }
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    event.target.files[0] && setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!name || !description || !file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("description", description);
    mutateAsync(formData);
  };

  return (
    <main className="py-32 px-20 flex items-start flex-col justify-center">
      <div className="flex justify-around w-full">
        <span>
          <h3 className="text-4xl font-bold">Create your own NFT</h3>
          <h4 className="text-xl mt-3">
            Just type in name, description and attach file
          </h4>
        </span>
        <button
          className="btn btn-primary"
          disabled={!canCreate}
          onClick={handleSubmit}
        >
          Create an NFT
        </button>
      </div>
      <section className="flex gap-10 mt-16 flex-wrap justify-center w-full">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter NFT name..."
            className="input input-bordered w-96"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="Enter NFT description..."
            value={description}
            className="input input-bordered w-96"
            onChange={handleDescChange}
          />
          <input
            type="file"
            className="file-input w-full max-w-xs"
            onChange={handleFileChange}
          />
        </div>
      </section>
    </main>
  );
};

export default CreateNftPage;

import React from "react";
import { motion } from "framer-motion";
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';

function NoteModal({ note, clicked, deleteNote, archiveNote }) {
  const { Title, Content, Color = "#030712", tags = [], isArchived, isTrashed } = note;

  const close = (e) => {
    e.stopPropagation();
    clicked();
  };

  const deleteClicked = async (e) => {
    e.stopPropagation()
    deleteNote()
    clicked()
  }

  const archiveClicked = (e) => {
    e.stopPropagation()
    archiveNote()
    clicked()
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <motion.div
        className="bg-gray-900 p-8 rounded-lg text-white max-w-lg w-full relative"
        style={{ backgroundColor: Color }}
      >
        {/* <button
          className="absolute top-2 right-2"
          onClick={close}
        >
          <CloseIcon className="text-white" />
        </button> */}
        <h2 className="text-2xl font-bold mb-4">{Title}</h2>
        <p className="text-lg mb-6">{Content}</p>
        <ul className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <li
              className="text-sm p-1 px-3 bg-slate-800 rounded-2xl"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center items-center gap-3">
          <button className="inline-flex justify-center w-20 text-left py-2 text-white rounded-md bg-blue-900 hover:blue-red-700 focus:bg-blue-700"
            onClick={archiveClicked}
          >
            {!isArchived ? <ArchiveIcon /> : <UnarchiveIcon />}
          </button>
          <button className="inline-flex justify-center w-20 text-left py-2 text-white rounded-md bg-red-900 hover:bg-red-700 focus:bg-red-700"
            onClick={deleteClicked}
          >
            {!isTrashed ? <DeleteIcon /> : <RestoreFromTrashIcon />}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NoteModal;

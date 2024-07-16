// import { createPortal } from "react-dom";

const BackDrop = ({ menuIsEnabled, onClose }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-40 h-full w-full bg-black/70 transition-opacity duration-300 dark:bg-black/60 ${
        !menuIsEnabled
          ? "invisible w-0 opacity-0"
          : "visible w-full opacity-100"
      }`}
      onClick={onClose}
    ></div>
  );
};

const ModalOverlay = ({ menuIsEnabled, children }) => {
  return (
    <div
      className={`fixed top-0 z-50 h-full w-[80%] overflow-y-auto rounded-r-xl bg-white dark:bg-gray-900 sm:w-[65%] ${
        !menuIsEnabled
          ? "-left-[80%] transition-all duration-300 ease-out sm:-left-[65%]"
          : "left-0 transition-all duration-300 ease-out"
      }`}
    >
      {children}
    </div>
  );
};

function MenuModal({ menuIsEnabled, onClose, children }) {
  return (
    <>
      <BackDrop menuIsEnabled={menuIsEnabled} onClose={onClose} />
      <ModalOverlay menuIsEnabled={menuIsEnabled}>{children}</ModalOverlay>
    </>
  );
}

export default MenuModal;

// function MenuModal({ menuIsEnabled, onClose, children }) {
//   return (
//     <>
//       {createPortal(
//         <BackDrop menuIsEnabled={menuIsEnabled} onClose={onClose} />,
//         document.body
//       )}
//       {createPortal(
//         <ModalOverlay menuIsEnabled={menuIsEnabled}>{children}</ModalOverlay>,
//         document.body
//       )}
//     </>
//   );
// }

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-12 px- md:px-0">
      <p className="text-center text-xs font-normal leading-5 text-stone-500 dark:text-gray-400 md:text-sm md:leading-6">
        Copyright ©{currentYear} WillyArt. • Do not reproduce without the
        expressed written consent of willysArt.
      </p>
    </footer>
  );
}

export default Footer;

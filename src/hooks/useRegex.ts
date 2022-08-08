function useRegex() {
  const checkEmail = (email: string) => {
    const emailRegExp = /[\w\-\_\.]+\@[\w\-\_]+[\.]+/g;

    return emailRegExp.test(email);
  };

  const checkPassword = (password: string) => {
    const passwordRegExp = /.{8,}/;

    return passwordRegExp.test(password);
  };

  return { checkEmail, checkPassword };
}

export default useRegex;

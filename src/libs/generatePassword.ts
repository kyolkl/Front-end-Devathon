export const generatePassword = (config) => {
  const characters = {
    incluirnúmero: " 0 1 2 3 4 5 6 7 8 9",
    capitalizar: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    lowercase: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  };

  let charactersArray = "";
  let user = "";
  for (let key in config) {
    if (config[key] === true) {
      charactersArray += characters[key] + "";
    }
  }
  charactersArray += characters.lowercase;
  charactersArray = charactersArray.trim();
  charactersArray = charactersArray.split(" ");

  for (let i = 0; i < 6; i++) {
    user += charactersArray[Math.floor(Math.random() * charactersArray.length)];
  }
  return user;
};

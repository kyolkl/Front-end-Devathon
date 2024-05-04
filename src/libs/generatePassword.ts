export type charactersProps = {
  incluirnumero: string;
  capitalizar: string;
};

export const generatePassword = (config: charactersProps) => {
  const characters = {
    incluirnumero: " 0 1 2 3 4 5 6 7 8 9",
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
// upercase: false,
// lowercase: false,
// symbol: false,
// number: false,
// length: 7,

type configProps2 = {
  upercase: false;
  symbol: false;
  number: false;
  length: 7;
  lowerCase: false;
};

export const generatePassword2 = (config: configProps2) => {
  const characters = {
    symbol: " ! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~",
    number: " 0 1 2 3 4 5 6 7 8 9",
    upercase: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    lowercase: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  };

  let charactersArray = "";
  let password = "";
  for (let key in config) {
    if (config[key] === true) {
      charactersArray += characters[key] + "";
    }
  }

  charactersArray += characters.lowercase;
  charactersArray = charactersArray.trim();
  charactersArray = charactersArray.split(" ");

  for (let i = 0; i < config.length; i++) {
    password +=
      charactersArray[Math.floor(Math.random() * charactersArray.length)];
  }
  return password;
};

export const generatePasswordForm = () => {
  const characters = {
    symbol: " ! # $ % & ( ) * + / < = > ? @ [ \\ ] ^ _ ~",
    number: " 0 1 2 3 4 5 6 7 8 9",
    upercase: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    lowercase: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  };

  let charactersArray = "";
  let password = "";

  charactersArray += characters.symbol;
  charactersArray += characters.number;
  charactersArray += characters.upercase;
  charactersArray += characters.lowercase;
  charactersArray = charactersArray.trim();
  charactersArray = charactersArray.split(" ");

  for (let i = 0; i < 14; i++) {
    password +=
      charactersArray[Math.floor(Math.random() * charactersArray.length)];
  }
  return password;
};

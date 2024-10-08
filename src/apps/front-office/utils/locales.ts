import { extend, groupedTranslations, trans } from "@mongez/localization";
import {
  arValidationTranslation,
  enValidationTranslation,
} from "@mongez/react-form";
import mainTranslation from "shared/localization/index.json";
// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  email: {
    en: "Email",
    ar: "البريد الالكتروني",
  },
  password: {
    en: "Password",
    ar: "كلمة المرور",
  },
  confirmPassword: {
    en: "Confirm Password",
    ar: "تأكيد كلمة المرور",
  },
});
extend("en", { validation: enValidationTranslation });
extend("ar", { validation: arValidationTranslation });
export const validationTranslation = {
  required: {
    en: "This input is required",
    ar: "هذا الحقل مطلوب",
    fr: "Ce champ est requis",
    es: "Este campo es obligatorio",
    it: "Questo campo è obbligatorio",
    de: "Dieses Feld ist erforderlich",
  },
  invalidEmailAddress: {
    en: "Invalid Email Address",
    ar: "بريد الكتروني خاطئ",
    fr: "Adresse e-mail invalide",
    es: "Dirección de correo electrónico no válida",
    it: "Indirizzo email non valido",
    de: "Ungültige E-Mail-Adresse",
  },
  url: {
    en: "Invalid URL",
    ar: "رابط غير صحيح",
    fr: "URL invalide",
    es: "URL no válida",
    it: "URL non valido",
    de: "Ungültige URL",
  },
  min: {
    en: "Value can not be lower than :min",
    ar: "القيمة يجب أن لا تقل عن :min",
    fr: "La valeur ne peut pas être inférieure à :min",
    es: "El valor no puede ser inferior a :min",
    it: "Il valore non può essere inferiore a :min",
    de: "Der Wert darf nicht kleiner sein als :min",
  },
  max: {
    en: "Value can not be greater than :max",
    ar: "القيمة يجب أن لا تزيد عن :max",
    fr: "La valeur ne peut pas être supérieure à :max",
    es: "El valor no puede ser superior a :max",
    it: "Il valore non può essere superiore a :max",
    de: "Der Wert darf nicht größer sein als :max",
  },
  matchElement: {
    en: "This input is not matching with :matchingInput",
    ar: "هذا الحقل غير متطابق مع :matchingInput",
    fr: "Ce champ ne correspond pas à :matchingInput",
    es: "Este campo no coincide con :matchingInput",
    it: "Questo campo non corrisponde a :matchingInput",
    de: "Dieses Feld stimmt nicht mit :matchingInput überein",
  },
  length: {
    en: "This input should have :length characters",
    ar: "حروف الحقل يجب ان تساوي :length",
    fr: "Ce champ doit avoir :length caractères",
    es: "Este campo debe tener :length caracteres",
    it: "Questo campo deve avere :length caratteri",
    de: "Dieses Feld sollte :length Zeichen haben",
  },
  minLength: {
    en: "This input can not be less than :length characters",
    ar: "هذا الحقل يجب ألا يقل عن :length حرف",
    fr: "Ce champ ne peut pas être inférieur à :length caractères",
    es: "Este campo no puede ser inferior a :length caracteres",
    it: "Questo campo non può essere inferiore a :length caratteri",
    de: "Dieses Feld darf nicht weniger als :length Zeichen haben",
  },
  maxLength: {
    en: "This input can not be greater than :length characters",
    ar: "هذا الحقل يجب ألا يزيد عن :length حرف",
    fr: "Ce champ ne peut pas être supérieur à :length caractères",
    es: "Este campo no puede ser superior a :length caracteres",
    it: "Questo campo non può essere superiore a :length caratteri",
    de: "Dieses Feld darf nicht mehr als :length Zeichen haben",
  },
  pattern: {
    en: "This input is not matching with the :pattern",
    ar: "هذا الحقل غير مطابق :pattern",
    fr: "Ce champ ne correspond pas au :pattern",
    es: "Este campo no coincide con el :pattern",
    it: "Questo campo non corrisponde al :pattern",
    de: "Dieses Feld stimmt nicht mit dem :pattern überein",
  },
  number: {
    en: "This input accepts only numbers",
    ar: "هذا الحقل لا يقبل غير أرقام فقط",
    fr: "Ce champ ne peut contenir que des chiffres",
    es: "Este campo solo acepta números",
    it: "Questo campo accetta solo numeri",
    de: "Dieses Feld akzeptiert nur Zahlen",
  },
  integer: {
    en: "This input accepts only integer digits",
    ar: "هذا الحقل لا يقبل غير أرقام صحيحة",
    fr: "Ce champ ne peut contenir que des chiffres entiers",
    es: "Este campo solo acepta dígitos enteros",
    it: "Questo campo accetta solo cifre intere",
    de: "Dieses Feld akzeptiert nur ganze Zahlen",
  },
  float: {
    en: "This input accepts only integer or float digits",
    ar: "هذا الحقل لا يقبل غير أرقام صحيحة او عشرية",
    fr: "Ce champ ne peut contenir que des chiffres entiers ou décimaux",
    es: "Este campo solo acepta dígitos enteros o decimales",
    it: "Questo campo accetta solo cifre intere o decimali",
    de: "Dieses Feld akzeptiert nur ganze oder Dezimalzahlen",
  },
  alphabet: {
    en: "This input accepts only alphabets",
    ar: "هذا الحقل لا يقبل غير أحرف فقط",
    fr: "Ce champ ne peut contenir que des lettres",
    es: "Este campo solo acepta letras",
    it: "Questo campo accetta solo lettere",
    de: "Dieses Feld akzeptiert nur Buchstaben",
  },
};

groupedTranslations("validation", validationTranslation);

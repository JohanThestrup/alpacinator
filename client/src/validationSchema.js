import * as Yup from "yup";

export const yupObject = Yup.object({
    name: Yup.string()
        .max(70, "Must be 70 characters or less")
        .min(3, "Must be at least 3 characters")
        .required("Required"),
    weight: Yup.number()
        .required("Required")
        .positive()
        .moreThan(0)
        .max(150, "That alpaca is too heavy."),
    color: Yup.string().matches(/^#([0-9a-f]{3}){1,2}$/i),
    farm: Yup.string()
        .oneOf([
            "svenssonsAlpacor",
            "alpacacenter",
            "karlssonsFarm",
            "importedAlpacas",
        ])
        .required(),
});

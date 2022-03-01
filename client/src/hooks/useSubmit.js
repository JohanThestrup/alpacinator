import React, { useState } from "react";
import { useFormik } from "formik";
import { postData, api } from "../utils";
import { yupObject } from "../validationSchema";

export default function useSubmit() {
    const [modalShow, setModalShow] = React.useState(false);
    const [isError, setIsError] = useState(false);

    const formikForm = useFormik({
        initialValues: {
            name: "",
            weight: "",
            color: "#563d7c",
            farm: "svenssonsAlpacor",
        },
        validationSchema: yupObject,
        onSubmit: async (alpaca) => {
            const url = `${api}/addalpaca`;
            try {
                postData(url, alpaca);
                setIsError(false);
            } catch (error) {
                setIsError(true);
                console.error(error);
            } finally {
                setModalShow(true);
            }
        },
    });

    return { formikForm, isError, modalShow, setModalShow };
}

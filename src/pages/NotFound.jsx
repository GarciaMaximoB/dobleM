import React from "react";
import { useTranslation } from "react-i18next";

function NotFound() {

    const { t } = useTranslation()
    return (
        <>
            <div className="not-found-container">
                <h1 className="heading-sections">{t('not-found-t')}</h1>
                <p className="p-notfound">{t('not-found-p')}</p>
                <button className="b-notfound">{t('not-found-b')}</button>
            </div>

        </>
    )
}

export default NotFound
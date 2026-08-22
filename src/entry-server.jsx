import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";
import { BookingModalProvider } from "./Components/BookingModal/BookingModalProvider.jsx";

export function render(url) {
    return renderToString(
        <StrictMode>
            <StaticRouter location={url}>
                <BookingModalProvider>
                    <App isPrerender />
                </BookingModalProvider>
            </StaticRouter>
        </StrictMode>
    );
}

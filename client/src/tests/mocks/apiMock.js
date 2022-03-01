import { rest } from "msw";
import { setupServer } from "msw/node";
import config from "../../config.json";

export const server = setupServer(
    rest.get(`${config.api.development}/getalpacas`, (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    alpaca_id: 1,
                    name: "Sven",
                    weight: 77,
                    color: "#563d7c",
                    farm: "svenssonsAlpacor",
                    created_on: "2022-02-27T22:11:08.566Z",
                },
                {
                    alpaca_id: 2,
                    name: "Jerry",
                    weight: 55,
                    color: "#000000",
                    farm: "importedAlpacas",
                    created_on: "2022-03-27T22:11:08.566Z",
                },
            ])
        );
    })
);

export const emptyServer = setupServer(
    rest.get(`${config.api.development}/getalpacas`, (req, res, ctx) => {
        return res(ctx.json([]));
    })
);

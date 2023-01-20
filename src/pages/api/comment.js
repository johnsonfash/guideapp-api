import Cors from 'cors'

const cors = Cors()



function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    await runMiddleware(req, res, cors)
    let response = { status: true, message: 'OK', data: null }

    if (req.method === 'GET') {
        if (req?.query?.id == 1) {
            response.data = Array(10).fill(0).map((_, i) => (
                {
                    id: i + 1,
                    profile_id: Buffer.from(Math.random().toString()).toString("base64").substring(10, 28).toLowerCase(),
                    profile_img: 'https://guideapp-api.vercel.app/uploads/avatar.png',
                    profile_username: Buffer.from(Math.random().toString()).toString("base64").substring(10, 18).toLowerCase(),
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi exercitationem omnis,  beatae alias ex nihil accusamus voluptatibus delectus quasi?'
                }
            ))
        }
        if (req?.query?.id == 2) {
            response.data = Array(10).fill(0).map((_, i) => (
                {
                    id: i + 11,
                    profile_id: Buffer.from(Math.random().toString()).toString("base64").substring(10, 28).toLowerCase(),
                    profile_img: 'https://guideapp-api.vercel.app/uploads/avatar.png',
                    profile_username: Buffer.from(Math.random().toString()).toString("base64").substring(10, 18).toLowerCase(),
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi exercitationem omnis,  beatae alias ex nihil accusamus voluptatibus delectus quasi?'
                }
            ))
        }
        if (req?.query?.id == 3) {
            response.data = Array(10).fill(0).map((_, i) => (
                {
                    id: i + 21,
                    profile_id: Buffer.from(Math.random().toString()).toString("base64").substring(10, 28).toLowerCase(),
                    profile_img: 'https://guideapp-api.vercel.app/uploads/avatar.png',
                    profile_username: Buffer.from(Math.random().toString()).toString("base64").substring(10, 18).toLowerCase(),
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi exercitationem omnis,  beatae alias ex nihil accusamus voluptatibus delectus quasi?'
                }
            ))
        }
        if (req?.query?.id == 4) {
            response.data = Array(10).fill(0).map((_, i) => (
                {
                    id: i + 31,
                    profile_id: Buffer.from(Math.random().toString()).toString("base64").substring(10, 28).toLowerCase(),
                    profile_img: 'https://guideapp-api.vercel.app/uploads/avatar.png',
                    profile_username: Buffer.from(Math.random().toString()).toString("base64").substring(10, 18).toLowerCase(),
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi exercitationem omnis,  beatae alias ex nihil accusamus voluptatibus delectus quasi?'
                }
            ))
        }
        res.send(response)
    }
}
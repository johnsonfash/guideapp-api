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
    let response = { error: false, errorMessage: null, data: [] }

    if (req.method === 'GET') {
        if (req?.query?.page == 1) {
            response.data = Array(3).fill(0).map((_, i) => (
                {
                    id: i + 1,
                    video_url: `https://guideapp-api.vercel.app/uploads/${i + 1}.MP4`,
                    video_gems: Math.random() * (40 - 5) + 5,
                    creator_img: 'https://guideapp-api.vercel.app/uploads/avatar.png',
                    creator_username: Buffer.from(Math.random().toString()).toString("base64").substring(10, 18).toLowerCase(),
                }
            ))
        }
        if (req?.query?.page == 2) {
            response.data = Array(3).fill(0).map((_, i) => (
                {
                    id: i + 4,
                    video_url: `https://guideapp-api.vercel.app/uploads/${i + 4}.mp4`,
                    video_gems: Math.random() * (40 - 5) + 5,
                    creator_img: 'https://guideapp-api.vercel.app/uploads/avatar.png',
                    creator_username: Buffer.from(Math.random().toString()).toString("base64").substring(10, 18).toLowerCase(),
                }
            ))
        }
        res.send(response)
    }
}
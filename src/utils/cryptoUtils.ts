import crypto from 'crypto'

export const randomString = () => {
    return crypto.randomBytes(10).toString('hex')
}

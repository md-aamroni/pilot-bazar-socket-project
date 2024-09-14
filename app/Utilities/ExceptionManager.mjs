export const ExceptionManager = (err, req, res, next) => {
    const errCode = res.statusCode !== 200 ? res.statusCode : 500;
    const message = err.message || 'An unknown error occurred';
    const success = false;
    const tracker = process.env.NODE_ENV === 'production' ? null : err.stack.split('\n').map(i => i.trim()).slice(1, -1);

    return res.status(errCode).json({ message, success, tracker });
}
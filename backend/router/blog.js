import express from 'express'
import verify from '../middlewares/verfyToken.js'
import {getTrends, getTweets} from '../controllers/blog.js'


const router = express.Router()

// router.use(verify)

router.get('/blogs/tweets',verify, getTweets);

router.get('/blogs/trending', verify, getTrends)


export default router;
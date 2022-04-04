import { useEffect, useState } from "react"

const userReview = () => {
    const [review, setReview] = useState([]);
    useEffect( () => {
        fetch("review.json")
        .then(res => res.json())
        .then(data => setReview(data));
    }, []);
    return [review, setReview];
}

export default userReview;
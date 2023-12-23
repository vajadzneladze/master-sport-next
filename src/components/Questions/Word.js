const Word = ({ img, title }) => {
    return (
        <div className="col-6 col-sm-3 text-center">
            <img src={img} alt={title} />

            <h4>{title}</h4>
        </div>
    )
}

export default Word

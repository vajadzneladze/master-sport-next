const Question = ({ data, isOpen, openHandler, index }) => {
    const { question, answer } = data

    return (
        <div className="question">
            <div className="top d-flex justify-content-between align-items-center">
                <h3
                    onClick={() => openHandler(isOpen ? null : index)}
                    className ="cursor-pointer">
                    {question || ''}
                </h3>
                <span
                    onClick={() => openHandler(isOpen ? null : index)}
                    className={isOpen ? 'open' : ''}>
                    {' '}
                </span>
            </div>

            <div
                className="bottom"
                style={{ height: isOpen ? '100px' : '0px' }}>
                <p>{answer || ''}</p>
            </div>
        </div>
    )
}

export default Question

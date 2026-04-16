function ProgressBar({count, bgColor}) {
    
    const progress = {width: `${count}%`};

return (
    <>
        <p className="h1">{count}%</p>
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
            style={{width: "0%"}}>

            </div>
        </div>
    </> 

)
}

export default ProgressBar
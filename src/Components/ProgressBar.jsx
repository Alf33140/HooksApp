function ProgressBar({count, bgColor, text}) {
    
    console.log(`Pourcentage`);

    const progress = {width: `${count}%`};

return (
    <>
        <p className="h1">{count}%</p>
        
        <div className="progress">
            <div className={`progress-bar progress-bar-striped progress-bar-animated bg-${bgColor}`} role="progressbar" 
            style={progress}>

            </div>
        </div>
    </> 

)
}

export default React.memo(ProgressBar)
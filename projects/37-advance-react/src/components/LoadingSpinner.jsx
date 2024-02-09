const LoadingSpinner=()=>{
    return <div className="d-flex justify-content-center">
    <div className="spinner-border" style={{margin: "10% 0%", width: "5rem", height: "5rem"}} role="status">
      <span className="sr-only"></span>
    </div>
  </div>
}
export default LoadingSpinner;
function EmptyLayout({ children }) {
    return (
        <div className="container-fluid">
            <div className="body-container">{children}</div>
        </div>
    )
}
export default EmptyLayout;
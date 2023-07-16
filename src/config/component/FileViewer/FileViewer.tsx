
const FileViewer = ({ pdfUrl } : any) => {
  return (
    <div>
      <embed
        src={pdfUrl}
        type="application/pdf"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default FileViewer;

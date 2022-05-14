import Dropzone from 'react-dropzone'

interface IProps {
    content: JSX.Element,
    onSubmit: (acceptedFiles: File) => void
}

export default function UpdateFile({ content, onSubmit }: IProps) {
    const handleDrop = ([acceptedFiles]: File[]) => {
        onSubmit(acceptedFiles)
    }
    return (
        <Dropzone accept='image/jpeg,image/png,image/jpg' onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {content}
                </div>
            )}
        </Dropzone>
    )
}

import logo from './../../../public/assets/logo.svg'

export default function FormHeader({ title }: { title: string }) {
    return (
        <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
        </div>
    )
}

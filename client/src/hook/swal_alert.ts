import swal from 'sweetalert';

export default function SwalAlert(title: string, text: string = '', icon: string) {
    swal({
        title,
        text,
        icon,
    });
}

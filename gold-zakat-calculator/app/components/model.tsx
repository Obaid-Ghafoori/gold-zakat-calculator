import React from 'react'

const model = () => {
    return (
        <>
            {/* Open the modal using a more robust method */}
            <button className="btn" onClick={() => {
                const modal = document.getElementById('my_modal_1');
                if (modal instanceof HTMLDialogElement) {
                    modal.showModal();
                } else {
                    console.error('Modal element not found or is not a dialog');
                }
            }}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>

            </dialog>

        </>
    )
}

export default model
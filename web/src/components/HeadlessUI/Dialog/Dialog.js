import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState, createRef } from 'react'
import { XIcon } from '@heroicons/react/outline'
import Button from 'src/components/Button'

export default function Modal(props) {
  const { title, button, buttonClasses, children } = props
  const [open, setOpen] = useState(false)
  const openButtonRef = createRef()
  const cancelButtonRef = useRef()

  function closeModal() {
    setOpen(false)

    openButtonRef?.current.focus()
  }

  function openModal() {
    setOpen(true)
  }

  return (
    <>
      {!buttonClasses ? (
        <Button
          title={button?.title ? button.title : title}
          icon={button?.icon}
          main={button?.main}
          as="button"
          ref={openButtonRef}
          onClick={openModal}
        />
      ) : (
        <button
          className={buttonClasses}
          ref={openButtonRef}
          onClick={openModal}
        >
          {button?.title ? button.title : title}
        </button>
      )}
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className={`${
                  button?.main ? 'bg-indigo-400' : 'bg-gray-300'
                } fixed inset-0 bg-opacity-95`}
              />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <button
                    className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={closeModal}
                  >
                    <span className="sr-only">
                      {`Cancel and close ${
                        button?.title ? button.title : title
                      } pop-up`}
                    </span>
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-2">{children}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

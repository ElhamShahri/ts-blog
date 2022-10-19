import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
interface IProps {
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
}
const RegisterModalComponent: FC<IProps> = ({ setShowRegisterModal }) => {
  //   const [showModal, setShowLoginModal] = useState(false);
  const [fullname, setFullName] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const resetForm = () => {
    setFullName("");
    setUserName("");
    setPassword("");
    console.log(fullname, username, password);
    setShowRegisterModal(false)
  };

  const RegisterHandler = () => {
    console.log(fullname, username, password);
    resetForm();
    setShowRegisterModal(false);
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setShowRegisterModal(false)}
      ></div>
      <div className="flex items-center px-4 py-8">
        <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 sm:flex">
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <h4 className="text-lg font-medium text-gray-800">Register</h4>
              <div>
                <div>
                  <div className="item-center pt-6 sm:pt-0">
                    <div className="p-3 mt-6 overflow-hidden bg-white shadow-md sm:rounded-lg ">
                      <form>
                        <div>
                          <div className="flex flex-col items-start">
                            <input
                              type="text"
                              name="fullname"
                              placeholder="fullname"
                              onChange={(event) =>
                                setFullName(event.target.value)
                              }
                              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex flex-col item start">
                            <input
                              type="text"
                              name="username"
                              placeholder="username"
                              onChange={(event) =>
                                setUserName(event.target.value)
                              }
                              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="flex flex-col items-start">
                            <input
                              type="password"
                              name="password"
                              placeholder="password"
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                          </div>
                        </div>
                      </form>
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                          onClick={() => {
                            RegisterHandler();
                          }}
                        >
                          Submit
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                          onClick={() => {
                            resetForm();
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModalComponent;

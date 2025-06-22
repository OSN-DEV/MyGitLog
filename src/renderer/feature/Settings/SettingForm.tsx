import React from 'react'
import EditText from '../../components/EditText'
import TextButton from '../../components/TextButton'
import { TSetting } from '../../../@type/TSetting'
import { devLog } from '../../../util/common'

const SettingForm = () => {
  /** Saveクリック */
  const onSaveClick = () => {
    devLog('onSaveClick')
    window.close()
  }

  /** Cancedlクリック */
  const onCancelClick = () => {
    devLog('onCancelClick')
    window.close()
  }
  const data : TSetting = {
    endPoint: 'end',
    ticketPrefix: 'NEWCLODEV',
    repositoryList: [
      { displayName: 'Android Print', url:'aaa' },
      { displayName: 'iOS Print', url:'bbb' },
      { displayName: 'Android Cloud', url:'aaa' },
      { displayName: 'iOS Cloud', url:'aaa' },
    ]
  }

  return(
    <form className='p-5'>
      <EditText title='Project Management Site' text={data.endPoint } />
      <EditText title='Ticket Prefix' text={data.ticketPrefix} />

      <br/>
      {
        data.repositoryList.map((repo, index) => {
          return <EditText key={index} title={repo.displayName} text={repo.url}/>
        })
      }
      <div className='mt-5 text-center'>
        <TextButton caption='Save' onClick={onSaveClick} styles={'text-indigo-500 hover:text-indigo-400 active:text-indigo-700'}/>
        <span className='inline-block w-[1em]'/>
        <TextButton caption='Cancel' onClick={onCancelClick} styles={'text-gray-500 hover:text-gray-400 active:text-gray-700'}/>
      </div>
    </form>
  )
}

export default SettingForm


// import React, { useRef, useState, FormEvent } from "react";

// type FormFields = {
//   name: string;
//   email: string;
//   age: string;
//   address: string;
// };

// type ValidationErrors = Partial<Record<keyof FormFields, string>>;

// const initialData: FormFields = {
//   name: "山田太郎",
//   email: "yamada@example.com",
//   age: "30",
//   address: "東京都千代田区",
// };

// export default function MultiInputForm() {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [errors, setErrors] = useState<ValidationErrors>({});

//   const validate = (data: FormFields): ValidationErrors => {
//     const errs: ValidationErrors = {};
//     if (!data.name) errs.name = "名前は必須です";
//     if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
//       errs.email = "有効なメールアドレスを入力してください";
//     }
//     if (!data.age || isNaN(Number(data.age))) {
//       errs.age = "年齢は数字で入力してください";
//     }
//     return errs;
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     const formData = new FormData(formRef.current);
//     const data: FormFields = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       age: formData.get("age") as string,
//       address: formData.get("address") as string,
//     };

//     const validationErrors = validate(data);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("✅ 入力データ:", data);
//       alert("送信成功！");
//     }
//   };

//   return (
//     <form ref={formRef} onSubmit={handleSubmit}>
//       <div>
//         <label>
//           名前:
//           <input name="name" defaultValue={initialData.name} />
//         </label>
//         {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
//       </div>

//       <div>
//         <label>
//           メール:
//           <input name="email" defaultValue={initialData.email} />
//         </label>
//         {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
//       </div>

//       <div>
//         <label>
//           年齢:
//           <input name="age" defaultValue={initialData.age} />
//         </label>
//         {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
//       </div>

//       <div>
//         <label>
//           住所:
//           <input name="address" defaultValue={initialData.address} />
//         </label>
//       </div>

//       <button type="submit">OK</button>
//     </form>
//   );
// }
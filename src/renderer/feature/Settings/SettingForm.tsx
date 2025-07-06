import React, { useEffect, useRef, useState } from 'react'
import EditText from '../../components/EditText'
import TextButton from '../../components/TextButton'
import { EmptySetting, TSetting } from '../../../@type/TSetting'
import { devLog } from '../../../util/common'
import BaseStyleProps from '$src/renderer/components/BaseStyleProps'

interface SettingFormProps extends BaseStyleProps {
  setting: TSetting
}

// フォームは状態管理せずに実装できるよ
// https://qiita.com/nuko-suke/items/1393995fd53ecaeb1cbc

const SettingForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<TSetting>(EmptySetting)
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const loading = async() => {
      const data = await window.mainApi.getSetting()
      setData(data)
    }
    loading()
    setIsLoading(false)
  }, [isLoading])

  /** Saveクリック */
  const onSaveClick = async(event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
//     const formData = new FormData(formRef.current);
//     const data: FormFields = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       age: formData.get("age") as string,
//       address: formData.get("address") as string,
//     };
    const formData = new FormData(formRef.current!!)

    const getString = (key:string): string => {
      return (formData.get(key) as string) || ''
    }
    
    const saveData: TSetting = {
      endPoint: getString('end-point'),
      ticketPrefix:getString('ticket-prefix'),
      repositoryList: [
        {displayName: getString('title-repo0'),url:getString('repo0')},
        {displayName: getString('title-repo1'),url:getString('repo1')},
        {displayName: getString('title-repo2'),url:getString('repo2')},
        {displayName: getString('title-repo3'),url:getString('repo3')},
      ]
    }
    devLog(JSON.stringify(saveData))
    await window.settingApi.saveSettings(saveData)
    devLog('onSaveClick')
    window.close()
  }


  /** Cancedlクリック */
  const onCancelClick = () => {
    devLog('onCancelClick')
    window.close()
  }
  // const data : TSetting = {
  //   endPoint: 'end',
  //   ticketPrefix: 'NEWCLODEV',
  //   repositoryList: [
  //     { displayName: 'Android Print', url:'aaa' },
  //     { displayName: 'iOS Print', url:'bbb' },
  //     { displayName: 'Android Cloud', url:'aaa' },
  //     { displayName: 'iOS Cloud', url:'aaa' },
  //   ]
  // }

  if (isLoading) {
    return (<p>is loading...</p>)
  }

  return(
    <form className='p-5' ref={formRef}>
      <EditText name="end-point" title='Project Management Site' text={data.endPoint } />
      <EditText name="ticket-prefix" title='Ticket Prefix' text={data.ticketPrefix} />

      <br/>
      {
        data.repositoryList.map((repo, index) => {
          return <EditText name={`repo${index}`} key={index} title={repo.displayName} text={repo.url}/>
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

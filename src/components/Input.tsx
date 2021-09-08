interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    onChange?: (value: any) => void
}
export default function Input(props: InputProps) {
    return ( 
        <div className="flex flex-col">
            <label className="mb-3">
                {props.text}
            </label>
            <input type={props.type ?? 'text'} 
            value={props.value}
            readOnly={props.readOnly}
            onChange={e => props.onChange?.(e.target.value )}
            className={`
            border border-indigo-500
            rounded-lg focus:outline-none bg-gray-50
            px-4 py-2 ${props.readOnly ? '' : 'focus:bg-white mb-2'}
            `}/>
        </div>
    )
}
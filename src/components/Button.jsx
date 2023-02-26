export default function (props) {
  return (
    <>
      <a
        href="#"
        className={`bg-[#C0DF33] rounded-[5px] w-[263px] h-[48px] flex justify-center items-center shadow-[0px_10px_10px_0px_#00000024] + ${props.className}`}
      >
        {props.children}
      </a>
    </>
  );
}

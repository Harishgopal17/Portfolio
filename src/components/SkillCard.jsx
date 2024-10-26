export default function SkillCard({ values }) {
  return (
    <div className="border border-[#1b2c68a0] rounded-lg bg-gradient-to-r to-[#0a0d37] text-lg font-medium text-white  cursor-pointer mx-6 my-3 hover:border-[#231b68e1]">
      <div className="h-[118px] w-[118px] lg:h-[135px] lg:w-[135px] flex flex-col gap-3 justify-center items-center">
        {values.icon}
        <h3 className="text-base">{values.name}</h3>
      </div>
    </div>
  );
}

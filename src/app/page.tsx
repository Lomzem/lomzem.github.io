export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center p-16">
      <h1 className="text-4xl">Hi! I&apos;m Lawjay!</h1>
      <img
        src="profile_pic.jpeg"
        alt="Lawjay"
        width={200}
        height={200}
        className="rounded-2xl"
      />
      <p className="text-xl">
        I&apos;m a computer science student at the CSU Chico!
      </p>
    </div>
  );
}

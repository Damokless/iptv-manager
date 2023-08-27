import Navbar from "@/components/navbar/Navbar";
export default function PlaylistManager() {
// const [channels, setChannels] = useState([]);
// async function handleFile(file: any) {
//   const dataText = await file[0].text();
//   const response = await fetch(`http://localhost:4000/playlistToJson`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ data: dataText }),
//   });
//   const channelsList = await response.json();
//   setChannels(channelsList);
// }
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
    </div>
  );
}

// AllProfiles component
const AllProfiles = () => {
    const [profiles, setProfiles] = useState([]);
  
    useEffect(() => {
      fetch('/api/profiles')
        .then((res) => res.json())
        .then((data) => setProfiles(data));
    }, []);
  
    return (
      <div>
        <h1>All Profiles</h1>
        {profiles.map((profile) => (
          <div key={profile._id}>
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
          </div>
        ))}
      </div>
    );
  };
  
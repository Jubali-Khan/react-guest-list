function GuestItem() {
  return (
    <>
      <button>-</button>
      <p style={{ display: 'inline' }}>name</p>
      <input type="checkbox" />
    </>
  );
}

export default function GuestListSection() {
  return (
    <>
      <h3>Guest list:</h3>
      <GuestItem />
    </>
  );
}

function UserItem({ user }) {
    return <div className="p-3 cursor-pointer hover:bg-slate-300">{user.username}</div>;
}

export default UserItem;

import React, {useState} from "react";

const Home = () => {
	const [input, setInput] = useState("");
	const [task, setTask] = useState([]);

	const handleAddTask = () => {
		if (input.trim() !== "") {
			setTask(task.concat([input]));
			setInput("");
		}
	};

	return (
		<div className="todo-container">
			<h1>Todos</h1>
			<div className="input-container">
				<input
					type="text"
					placeholder="What needs to be done?"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							handleAddTask();
						}
					}}
				/>
			</div>
			<ul className="task-list">
				{task.map((t, index) => (
					<li key={index} className="task-item">
						<span>{t}</span>
						<i
							className="fa fa-times remove-task"
							aria-hidden="true"
							onClick={() => setTask(task.filter((_, indexNum) => index !== indexNum))}
						></i>
					</li>
				))}
				{task.length === 0 && <li className="no-tasks">No tasks, add a task</li>}
			</ul>
			<div className="tasks-left">
				{task.length === 1 ? `${task.length} task left` : `${task.length} tasks left`}
			</div>
		</div>
	);
};

export default Home;
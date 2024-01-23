"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData, "formData");

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    if (!res.ok) {
      console.error("Failed to create Ticket:", res.status, res.statusText);
      // Instead of throwing an error, show an error message to the user
      setError("Failed to create Ticket. Please try again.");
      return;
    }

    router.refresh();
    router.push("/");
  };




  return (
    // <div className="flex justify-center">
    //   <form
    //     className="flex flex-col gap-3 w-1/2"
    //     method="post"
    //     onSubmit={handleSubmit}
    //   >
    //     <h3> Create your Ticket</h3>
    //     <label>Title</label>
    //     <input
    //       id="title"
    //       type="text"
    //       name="title"
    //       value={formData.title}
    //       required={true}
    //       onChange={handleChange}
    //     />
    //     <label>Description</label>
    //     <textarea
    //       id="description"
    //       name="description"
    //       value={formData.description}
    //       required={true}
    //       onChange={handleChange}
    //       rows={5}
    //     />
    //     <label>Category</label>
    //     <select

    //       name="category"
    //       value={formData.category}
    //       onChange={handleChange}
    //     >
    //       <option value="Hardware Problem"> Hardware Problem</option>
    //       <option value="Software Problem"> Software Problem</option>
    //       <option value="project"> Project</option>
    //     </select>
    //     <label>Priority</label>
    //     <div>
    //       <input
    //         id="priority-1"
    //         type="radio"
    //         name="priority"
    //         value={1}
    //         onChange={handleChange}
    //         checked={formData.priority == 1}
    //       />
    //       <label>1</label>
    //       <input
    //         id="priority-2"
    //         type="radio"
    //         name="priority"
    //         value={2}
    //         onChange={handleChange}
    //         checked={formData.priority == 2}
    //       />
    //       <label>2</label>
    //       <input
    //         id="priority-3"
    //         type="radio"
    //         name="priority"
    //         value={3}
    //         onChange={handleChange}
    //         checked={formData.priority == 3}
    //       />
    //       <label>3</label>
    //       <input
    //         id="priority-4"
    //         type="radio"
    //         name="priority"
    //         value={4}
    //         onChange={handleChange}
    //         checked={formData.priority == 4}
    //       />
    //       <label>4</label>
    //       <input
    //         id="priority-5"
    //         type="radio"
    //         name="priority"
    //         value={5}
    //         onChange={handleChange}
    //         checked={formData.priority == 5}
    //       />
    //       <label>5</label>
    //     </div>

    //     <label>Process</label>
    //     <input
    //       id="range"
    //       type="range"
    //       name="progress"
    //       value={formData.progress}
    //       onChange={handleChange}
    //       min="0"
    //       max="100"
    //     />
    //     <label>Status</label>
    //     <select name="status" value={formData.status} onChange={handleChange}>
    //       <option value="not started"> Not Started</option>
    //       <option value="started"> Started</option>
    //       <option value="done"> Done</option>
    //     </select>

    //     <input type="submit" className="btn" value="Create the ticket" />
    //   </form>
    // </div>
    <div className=" flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>Create New Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>

        {/* {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))} */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem"> Hardware Problem</option>
          <option value="Software Problem"> Software Problem</option>
          <option value="project"> Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        {/* <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
        /> */}
        <input type="submit" className="btn" value="Create the ticket" />
      </form>
    </div>
  );
};

export default TicketForm;

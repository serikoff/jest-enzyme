import React from "react";
import Post from "./post";

const setUp = (props) => shallow(<Post {...props} />);

describe("should render Post component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .post wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
    console.log(component.debug())
  });

  it("should contain link and href=#", () => {
    const wrapper = component.find("a[href='#']");
    expect(wrapper.length).toBe(1);
  });

  it("should render created date", () => {
    const created_at = "01-03-2020";
    component = setUp({ created_at });
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(created_at).toLocaleDateString());

    component = setUp({ created_at: null });
    const dateNull = component.find(".date");
    expect(dateNull.text()).toBe('No date');
  });
});

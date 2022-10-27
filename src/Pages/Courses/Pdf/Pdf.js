import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const Pdf = ({ course }) => {
  const { name, cardImg, student, create, lesson, update, language, body, categoryId, deadLine, enroll, instructor, instructorSay, price, startCourse, time, type } = course;

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>{name}</Text>
        <Text style={styles.text}>Instructor: {instructor}</Text>
        <Text style={styles.text}>Created by: {create}</Text>
        <Text style={styles.text}>Modify: {update}</Text>
        <Text style={styles.text}>Language: {language}</Text>
        <Text style={styles.text}>Students: {student}</Text>
        <Text style={styles.text}>Time: {time}</Text>
        <Text style={styles.text}>Type: {type}</Text>
        <Text style={styles.text}>DeadLine: {deadLine}</Text>
        <Text style={styles.text}>Price: TK{price}</Text>
        <Text style={styles.text}>{body}</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default Pdf;
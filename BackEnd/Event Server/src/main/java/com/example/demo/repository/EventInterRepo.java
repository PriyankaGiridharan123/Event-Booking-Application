package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.EventEntity;

@Repository
public interface EventInterRepo extends JpaRepository<EventEntity,Integer>,PagingAndSortingRepository<EventEntity,Integer>{

	
    @Query(value = "SELECT DISTINCT event FROM event", nativeQuery = true)
    List<String> findAllEventTypes(); 

}

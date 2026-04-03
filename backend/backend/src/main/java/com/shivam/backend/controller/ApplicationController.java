package com.shivam.backend.controller;

import com.shivam.backend.dto.ApplicationRequest;
import com.shivam.backend.dto.UpdateStatusRequest;
import com.shivam.backend.model.Application;
import com.shivam.backend.service.ApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping("/apply")
    public ResponseEntity<Application> apply(@Valid @RequestBody ApplicationRequest request) {
        return ResponseEntity.ok(applicationService.submitApplication(request));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Application>> getApplications(@PathVariable Long userId) {
        return ResponseEntity.ok(applicationService.getApplicationsByUser(userId));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Application> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody UpdateStatusRequest request) {
        return ResponseEntity.ok(applicationService.updateStatus(id, request.getStatus()));
    }
}
